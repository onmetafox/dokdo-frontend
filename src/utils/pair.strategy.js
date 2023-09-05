import _ from 'lodash';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectStrategies } from 'src/features/config/configSlice';
import $scope from 'src/utils/scope';

export const isReservedMethod = function (tradingMethod) {
  switch (tradingMethod) {
    case 'stepgrid':
    case 'spotgrid':
    case 'spotgridadvanced':
    case 'stepgridhybrid':
    case 'stepgridscalp':
    case 'tenkan':
    case 'futuresgrid':
    case 'market_maker':
    case 'custom':
    case 'stepgridhedge':
      return true;
    default:
      return false;
  }
};

export const getRelevantEditorReference = function (strategy, sellMethod, marketType) {
  if (strategy === 'quanta') strategy = 'stepgrid';
  if (isReservedStrategy(strategy)) {
    return strategy;
  }
  if (isReservedMethod(sellMethod)) {
    if (sellMethod === 'market_maker') {
      if (marketType !== 'spot') return sellMethod + ' (futures)';
    }
    return sellMethod;
  } else if (marketType === 'spot') {
    return 'builder';
  }
  return 'builder (futures)';
};

// create list of relevant presets for current license type (getStrategyList)
export const useReservedStrategyList = function (marketType, licenseType, exchange, isDemo) {
  return useMemo(() => {
    let strategyList = [];
    _.each($scope.easyStratEditor, (optionData, element) => {
      const { exchangeWhitelist, exchangeBlacklist, license, market } = optionData.info;

      const exchangeWhitelisted = _.isNil(exchangeWhitelist) ? true : exchangeWhitelist.indexOf(exchange) > -1;
      const exchangeBlacklisted = _.isNil(exchangeBlacklist) ? false : exchangeBlacklist.indexOf(exchange) > -1;
      const exchangeSupported = exchangeWhitelisted && !exchangeBlacklisted;

      if (exchangeSupported && (license.indexOf(licenseType) > -1 || isDemo)) {
        if (element === 'custom') {
          strategyList.push(element);
        } else if (marketType === 'spot' && market === 'spot') {
          strategyList.push(element);
        } else if (marketType !== 'spot' && market !== 'spot') {
          strategyList.push(element);
        }
      }
    });
    return strategyList.sort();
  }, [exchange, isDemo, licenseType, marketType]);
};

export const isReservedStrategy = function (strategyName) {
  return !!$scope.easyStratEditor[strategyName];
};

// create list of user strategies suitable for current license type (getUserStrategyList)
export const useUserStrategyList = function (marketType, licenseType) {
  const strategies = useSelector(selectStrategies);

  return useMemo(() => {
    let strategyList = [];
    _.each(strategies, (data, name) => {
      const reserved = isReservedStrategy(name);
      if (reserved) return;
      if (marketType === 'spot' && !data?.IS_MARGIN_STRAT) {
        if (licenseType === 'one' && data.BUY_METHOD === 'stepgrid') {
          strategyList.push(name);
        } else if (licenseType !== 'one') {
          strategyList.push(name);
        }
      } else if (marketType !== 'spot' && licenseType !== 'one' && data?.IS_MARGIN_STRAT) {
        strategyList.push(name);
      }
    });
    return strategyList.sort();
  }, [licenseType, marketType, strategies]);
};

export const getMaxInvest = function (buyMethod, overrides) {
  const type = buyMethod;
  let maxInvest = 0;
  let dcaInvest = 0;

  if (type === 'spotgrid' || type === 'stepgrid' || type === 'stepgridhybrid' || type === 'stepgridhedge') {
    maxInvest = parseFloat(overrides?.TRADING_LIMIT) * parseFloat(overrides?.MAX_BUY_COUNT);
    return maxInvest;
  } else if (type === 'spotgridadvanced' || type === 'futuresgrid' || type === 'stepgridscalp') {
    let nextTradingLimit = parseFloat(overrides?.TRADING_LIMIT);
    for (var i = 0; i < parseFloat(overrides?.MAX_BUY_COUNT); i++) {
      maxInvest = maxInvest + nextTradingLimit;
      nextTradingLimit = nextTradingLimit * parseFloat(overrides?.TL_MULTIPLIER);
    }
    return maxInvest;
  } else {
    let prevRoundInvest = 0;
    let roundInvest;
    for (let i = 0; i < parseFloat(overrides?.DU_CAP_COUNT); i++) {
      if (prevRoundInvest === 0) {
        roundInvest =
          parseFloat(overrides?.TRADING_LIMIT) *
          (((parseFloat(overrides?.DU_BUYDOWN) / 100) * -1 + 1) * parseFloat(overrides?.DOUBLE_UP_CAP));
        prevRoundInvest = roundInvest + parseFloat(overrides?.TRADING_LIMIT);
      } else {
        roundInvest =
          prevRoundInvest +
          prevRoundInvest * ((parseFloat(overrides?.DU_BUYDOWN) / 100) * -1 + 1) * parseFloat(overrides?.DOUBLE_UP_CAP);
        prevRoundInvest = roundInvest;
      }
    }
    dcaInvest = roundInvest - parseFloat(overrides?.TRADING_LIMIT);
    if (parseFloat(overrides?.DU_CAP_COUNT) === 1) {
      dcaInvest = roundInvest;
    }
    if (parseFloat(overrides?.DU_CAP_COUNT) === 0 || overrides?.DOUBLE_UP === false) {
      dcaInvest = 0;
    }
    return parseFloat(overrides?.TRADING_LIMIT) + dcaInvest;
  }
};

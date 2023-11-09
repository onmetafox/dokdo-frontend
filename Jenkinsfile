#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('prepare') {
            steps {
                echo "prepare..."
                sh "yarn install"
            }
        }

	    stage('build') {
            steps {
                echo "build started..."
                sh "npm run build"
            }
        }


        stage('deploy') {
            steps {
                echo "deploy started.."
                sh "ls build -l"
		        sh "cd build"
                sshPublisher(publishers: [sshPublisherDesc(configName: 'dokdo-server-dev', transfers: [sshTransfer(cleanRemote: true, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'tymt-frontend/build', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
            }
        }
    }
}

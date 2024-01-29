#!/usr/bin/env groovy

def jobName = env.JOB_NAME
echo "Job name: ${jobName}"
def jobEnv = jobName.split('-').last()
env.JOB_ENV = jobEnv
echo "Job env: ${env.JOB_ENV}"

def label = 'devagent'

if(jobEnv == 'prod') {
    label = 'prodagent'
}

node("${label}") {

    env.SERVICE = 'dokdo-frontend'
    env.RESTART = false
    env.SOURCE = 'build'

    try {
        load "${HOME}/scripts/pipeline.head.groovy"

        stage('Prepare') {
            echo "prepare..."
            nodejs('node 18.18.0') {                   
                sh "yarn install"
            }  
        }

	    stage('Build') {
            echo "build started..."
            nodejs('node 18.18.0') {  
                sh "yarn build"
            }
        }

        load "${HOME}/scripts/pipeline.post.groovy"
    }
    catch(Exception ex) {
        currentBuild.result = "FAILED"
        echo "Error during build - ${ex.toString()}"
        echo "Message - ${ex.getMessage()}"
    }
    finally {
        if(env.JOB_ENV == 'version') {
            cleanWs(cleanWhenNotBuilt: false,
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true,
                    patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                                [pattern: '.propsfile', type: 'EXCLUDE']])
        }
    }
}


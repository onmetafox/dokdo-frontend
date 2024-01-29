#!/usr/bin/env groovy

node {
    env.SERVICE = 'dokdo-frontend'
    env.RESTART = false
    env.SOURCE = 'build'

    try {
        load "${JENKINS_HOME}/scripts/pipeline.head.groovy"

        stage('Prepare') {
            echo "prepare..."
            nodejs('node 18.18.0') {                   
                sh "yarn install"
            }  
        }

	    stage('Build') {
            echo "build started..."
            nodejs('node 18.18.0') {  
                sh "npm run build"
            }
        }

        load "${JENKINS_HOME}/scripts/pipeline.post.groovy"
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


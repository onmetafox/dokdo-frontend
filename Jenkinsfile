#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('prepare') {
            steps {
                echo "prepare..."
                nodejs('node 18.18.0') {                   
                    sh "yarn install"
                }  
            }
        }

	    stage('build') {
            steps {
                echo "build started..."
                nodejs('node 18.18.0') {  
                    sh "npm run build"
                }
            }
        }


        stage('deploy') {
            steps {
                echo "deploy started.."
                sh "ls build -l"
                sshPublisher(publishers: [sshPublisherDesc(configName: 'dokdo-server-dev', transfers: [sshTransfer(cleanRemote: true, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'dokdo-frontend', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'build/**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}

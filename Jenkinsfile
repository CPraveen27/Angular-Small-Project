pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20.19.0'
    }

    environment {
        PATH = "${tool 'NodeJS 20.19.0'}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'gitlab-access', url: 'https://gitlab.sharpb2bcloud.com/ssdi-rmm/gdm-api.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Generate Code Coverage') {
            steps {
                sh 'npm run coverage'
            }
        }

        stage('Publish Coverage Report') {
            steps {
                publishHTML(target: [
                    reportName : 'Code Coverage',
                    reportDir  : 'coverage',
                    reportFiles: 'index.html'
                ])
            }
        }

        stage('Publish JUnit Test Results') {
            steps {
                junit 'test-results/*.xml'
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
    }
}

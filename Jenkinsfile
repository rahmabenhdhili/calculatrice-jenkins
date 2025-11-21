pipeline {
    agent any

    parameters {
        choice(
            name: 'ENV',
            choices: ['dev', 'test', 'prod'],
            description: 'Choisissez l’environnement'
        )
    }

    stages {
        stage('Build') {
            steps {
                echo "Vérification des fichiers du projet..."
                bat 'dir'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    if (params.ENV == "dev") {
                        bat "if not exist output\\dev mkdir output\\dev && xcopy /E /Y * output\\dev\\"
                        echo "Déployé en DEV"
                    }
                    if (params.ENV == "test") {
                        bat "if not exist output\\test mkdir output\\test && xcopy /E /Y * output\\test\\"
                        echo "Déployé en TEST"
                    }
                    if (params.ENV == "prod") {
                        bat "if not exist output\\prod mkdir output\\prod && xcopy /E /Y * output\\prod\\"
                        echo "Déployé en PROD"
                    }
                }
            }
        }
    }
}

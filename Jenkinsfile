pipeline {
    agent any

    parameters {
        choice(
            name: 'ENV',
            choices: ['dev', 'test', 'prod'],
            description: 'Choisissez l’environnement de déploiement'
        )
    }

    stages {

        stage('Build') {
            steps {
                echo "📦 Vérification des fichiers du projet..."
                bat "dir"
            }
        }

        stage('Tests') {
            steps {
                echo "🧪 Exécution des tests automatisés..."
                bat "node test.js"
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Déploiement vers l’environnement : %ENV%"

                script {
                    bat "if not exist output\\%ENV% mkdir output\\%ENV%"
                    bat "copy /Y index.html output\\%ENV%\\"
                    bat "copy /Y script.js output\\%ENV%\\"
                    bat "copy /Y style.css output\\%ENV%\\"
                    bat "copy /Y test.js output\\%ENV%\\"
                }

                echo "Déploiement terminé dans output/%ENV%"
            }
        }
    }
}

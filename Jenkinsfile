pipeline {
    agent any

    environment {
        ENV = "dev"
    }

    stages {
        stage('Build') {
            steps {
                echo "Vérification des fichiers du projet..."
                bat "dir"
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // créer le dossier
                    bat "if not exist output\\%ENV% mkdir output\\%ENV%"

                    // copier seulement les fichiers, PAS tout le workspace
                    bat "copy /Y index.html output\\%ENV%\\"
                    bat "copy /Y script.js output\\%ENV%\\"
                    bat "copy /Y style.css output\\%ENV%\\"
                    bat "copy /Y test.js output\\%ENV%\\"

                    echo "Déploiement terminé dans output/%ENV%"
                }
            }
        }
    }
}

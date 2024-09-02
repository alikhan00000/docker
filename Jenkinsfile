pipeline {
    agent any

    environment {
        REPO_OWNER = 'alikhan00000'
        REPO_NAME = 'docker'
        BRANCH_NAME = 'main' // Specify the branch you want to deploy
        EVENT_TYPE = 'trigger' // Should match the event type defined in the workflow file
        AWS_ACCESS_KEY_ID = credentials('cred-test')
        AWS_SECRET_ACCESS_KEY = credentials('cred-test')
        GIT_USERNAME = credentials('63973772-11d7-437e-8774-a35c98d23af9') // GitHub username
        GITHUB_TOKEN = credentials('63973772-11d7-437e-8774-a35c98d23af9')   // GitHub token
        APPLICATION_NAME = 'docker7'
        ENVIRONMENT_NAME = 'Docker7-env'
        REGION = 'us-east-1'
        AWS_CREDENTIALS = credentials('cred-test')
        S3_BUCKET = 'elasticbeanstalk-us-east-1-211125344531'
    }

    stages {
        stage('Check AWS Connection') {
            steps {
                script {
                    // Display current AWS configuration
                    def awsConfig = bat(script: "aws configure list", returnStdout: true).trim()
                    echo "AWS CLI Configuration:\n${awsConfig}"
                }
            }
        }
        stage('Check Repository') {
                steps {
                    script {
                        def repoDir = "${env.WORKSPACE}\\${REPO_NAME}"
                        echo "Repository Directory: ${repoDir}"
                        withCredentials([usernamePassword(credentialsId: '63973772-11d7-437e-8774-a35c98d23af9', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GITHUB_TOKEN')]) {
                            if (fileExists(repoDir)) {
                                echo "Repository exists. Fetching latest changes..."
                                bat """
                                RMDIR /S /Q "${repoDir}"
                                """
                                echo "Repository directory deleted."
                                
                                // Empty the Recycle Bin
                                powershell '''
                                    $shell = New-Object -ComObject Shell.Application
                                    $recycleBin = $shell.Namespace(10)
                                    $recycleBin.Items() | ForEach-Object { $_.InvokeVerb('delete') }
                                    Write-Output "Recycle Bin emptied."
                                '''
                            } 
                                echo "Repository does not exist. Cloning repository..."
                                bat """
                                git config --global core.packedGitLimit 512m
                                git config --global core.packedGitWindowSize 512m
                                git config --global pack.deltaCacheSize 256m
                                git config --global pack.packSizeLimit 2g
                                git config --global pack.windowMemory 1g
                                git lfs install
                                git clone https://${GIT_USERNAME}:${GITHUB_TOKEN}@github.com/${REPO_OWNER}/${REPO_NAME}.git ${repoDir}
                                cd ${repoDir}
                                
                                git checkout ${BRANCH_NAME}

                                
                                        """
                                    
                        }
                    }
                }
            }
      stage('Generate Deployment Package') {
            steps {
                script {
                    powershell '''
                    # Define paths
                    $sourceDir = "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\docker9\\docker"
                    $zipFile = "${env.WORKSPACE}\\BookAppFrontend.zip"
                    $sevenZipPath = "C:\\Program Files\\7-Zip\\7z.exe"
        
                    # Echo the paths
                    Write-Output "Source directory: $sourceDir"
                    Write-Output "Zip file path: $zipFile"
                    Write-Output "7-Zip path: $sevenZipPath"
        
                    # Check if 7-Zip is installed
                    if (-not (Test-Path $sevenZipPath)) {
                        Write-Error "7-Zip is not installed or not found at $sevenZipPath"
                        exit 1
                    }
        
                    # Remove existing zip file if it exists
                    if (Test-Path $zipFile) {
                        Remove-Item -Path $zipFile -Force
                        Write-Output "Removed existing zip file: $zipFile"
                    }
        
                    # Create zip file using 7-Zip
                    & $sevenZipPath a -tzip $zipFile "$sourceDir\\*" -x!"$sourceDir\\path\\to\\exclude\\*"
                    Write-Output "Created zip file: $zipFile"
                    '''
                }
            }
        }
        stage('Fix Backslashes in Zip') {
            steps {
                script {
                    powershell '''
                        $zipPath = "C:\\BookAppFrontend.zip"
                        $tempPath = "C:\\temp_fixed.zip"
        
                        Add-Type -AssemblyName System.IO.Compression.FileSystem
                        $archive = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
                        $tempArchive = [System.IO.Compression.ZipFile]::Open($tempPath, 'Create')
        
                        foreach ($entry in $archive.Entries) {
                            $newName = $entry.FullName -replace '\\\\', '/'
                            Write-Output "Processing entry: $($entry.FullName) -> $newName"
                            
                            $tempEntry = $tempArchive.CreateEntry($newName)
                            $tempStream = $tempEntry.Open()
                            $stream = $entry.Open()
                            $stream.CopyTo($tempStream)
                            $tempStream.Close()
                            $stream.Close()
                        }
        
                        $archive.Dispose()
                        $tempArchive.Dispose()
        
                        Remove-Item -Path $zipPath -Force
                        Move-Item -Path $tempPath -Destination $zipPath -Force
        
                        Write-Output "Zip file paths fixed."
                    '''
                }
            }
        }
      stage('Get Timestamp') {
            steps {
                script {
                    // Get the current timestamp using PowerShell
                  def timestamp = powershell(returnStdout: true, script: '''
                        $timestamp = Get-Date -Format "yyyy-MM-ddTHH-mm-ss-fffZ"
                        return $timestamp
                    ''').trim()
                    env.TIMESTAMP = timestamp
                    env.VERSION_LABEL = "Sample-${env.TIMESTAMP}"

                    echo "Version Label: ${env.VERSION_LABEL}"
                }
            }
        }
        stage('Upload to S3') {
            steps {
                script {
                    bat """
                        aws s3 cp C:\\BookAppFrontend.zip s3://elasticbeanstalk-us-east-1-211125344531/docker3/BookAppFrontend.zip
                    """
                    echo "Uploaded BookAppFrontend.zip to S3"
                }
            }
        }
        
        stage('Delete Local Zip File Permanently') {
            steps {
                script {
                    powershell '''
                        $zipFile = "C:\\BookAppFrontend.zip"

                        # Delete the file
                        if (Test-Path $zipFile) {
                            Remove-Item -Path $zipFile -Force
                            Write-Output "Deleted file: $zipFile"
                        } else {
                            Write-Output "File does not exist: $zipFile"
                        }

                        # Empty the Recycle Bin
                        $shell = New-Object -ComObject Shell.Application
                        $recycleBin = $shell.Namespace(10)
                        $recycleBin.Items() | ForEach-Object { $_.InvokeVerb('delete') }
                        Write-Output "Recycle Bin emptied."
                    '''
                }
            }
        }
        stage('Deploy to Elastic Beanstalk') {
            steps {
                script {
                 
                    bat """
                        aws elasticbeanstalk create-application-version ^
                            --application-name ${env.APPLICATION_NAME} ^
                            --version-label ${env.VERSION_LABEL} ^
                            --source-bundle S3Bucket=${env.S3_BUCKET},S3Key=docker3/BookAppFrontend.zip ^
                            --region ${env.REGION}
                            
                        aws elasticbeanstalk update-environment ^
                            --application-name ${env.APPLICATION_NAME} ^
                            --environment-name ${env.ENVIRONMENT_NAME} ^
                            --version-label ${env.VERSION_LABEL} ^
                            --region ${env.REGION}
                    """
                    echo "Elastic Beanstalk deployment initiated successfully with version ${env.VERSION_LABEL}"
                    
                    sleep(time: 11 * 60, unit: 'SECONDS')

                    // Wait for environment update to complete
                   
                    
                    // def maxRetries = 10
                    // def retryCount = 0
                    
                    // while (retryCount < maxRetries) {
                    //     echo "Running AWS CLI command to get environment status..."
                    //     // Capture the command output
                    //     def commandOutput = bat(script: """
                    //     aws elasticbeanstalk describe-environments --application-name ${env.APPLICATION_NAME} --environment-names ${env.ENVIRONMENT_NAME} --region ${env.REGION}
                    // """, returnStdout: true).trim()

                     
                    //     echo "Command output: ${commandOutput}"
                    //     def jsonStartIndex = commandOutput.indexOf('{')
                    //     def jsonOutput = commandOutput.substring(jsonStartIndex).trim()
                        
                    //     // Print extracted JSON for debugging
                    //     echo "Extracted JSON: ${jsonOutput}"
                   
                    //     def jsonSlurper = new groovy.json.JsonSlurper()
                    //     def json = jsonSlurper.parseText(jsonOutput)
                        
                    //     // Extract the status from the JSON response
                    //     def status = json.Environments[0].Status
                    //     echo "Environment status: ${status}"

                    
                    //     // Check if the status is "Ready" or any other expected values
                    //     if (status != "Ready") {
                    //       echo "Waiting for environment update to complete..."
                    //         sleep(time: 60, unit: 'SECONDS') // Wait 1 minute before checking again
                    //         retryCount++
                    //         if (retryCount >= maxRetries) {
                    //             error "Deployment status check timed out after ${maxRetries} attempts."
                    //         }
                    //     } else {
                            
                    //          echo "Deployment is complete and environment is ready."
                    //         break
                    //     }
                    // }

                }
            }
        }

        stage('Deployment Confirmation') {
            steps {
                script {
                    echo "App deployed to Elastic Beanstalk"
                }
            }
        }
    }
}

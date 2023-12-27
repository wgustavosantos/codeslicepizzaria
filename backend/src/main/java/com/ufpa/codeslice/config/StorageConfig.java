package com.ufpa.codeslice.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StorageConfig {

    private final StorageProperties storageProperties;

    public StorageConfig(StorageProperties storageProperties) {
        this.storageProperties = storageProperties;
    }


    @Bean
    public AmazonS3 amazonS3 () {

        final BasicAWSCredentials credentials = new BasicAWSCredentials
                (storageProperties.getS3().getIdChaveAcesso(),
                        storageProperties.getS3().getChaveAcessoSecreta());

        return AmazonS3ClientBuilder.standard().
        withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(storageProperties.getS3().getRegiao()).build();
    }

    @Bean
    public S3FotoStorageService photoStorageService () {

            return new S3FotoStorageService(storageProperties, amazonS3());
    }
}
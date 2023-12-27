package com.ufpa.codeslice.config;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.InputStream;

@Getter
    @Setter
    @Builder
    public class newPhoto {

        private String id;
        private String fileName;
        private String contentType;
        private InputStream inputStream;
    }
package com.ufpa.codeslice.config;

import lombok.Builder;
import lombok.Getter;

import java.io.InputStream;

public interface PhotoStorageService {

    String armazenar(newPhoto newPhoto);

    RecoveredPhoto recuperar (String fileName);

    void deletar(String fileName);



    @Getter
    @Builder
    class RecoveredPhoto {
        private InputStream inputStream;
        private String url;
        private String contentType;

        public boolean hasUrl () {
            return url != null;
        }

        public boolean hasInputStream () {
            return inputStream != null;
        }
    }
}

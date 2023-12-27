package com.ufpa.codeslice.config;

import com.amazonaws.regions.Regions;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.nio.file.Path;

@Getter
@Setter
@Component
@ConfigurationProperties("ufpacodeslice.storage")
public class StorageProperties {

    private Local local = new Local();
    private S3 s3 = new S3();
    private TipoStorage tipoStorage = TipoStorage.S3;
    public enum TipoStorage {
        LOCAL, S3
    }
    @Getter
    @Setter
    public class Local {
        private Path diretorioFotos;
    }

    @Setter
    @Getter
    public class S3 {
        private String idChaveAcesso;
        private String chaveAcessoSecreta;
        private String bucket;
        private Regions regiao;
        private String diretorio;
    }

}
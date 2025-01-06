import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function initSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Heroes API')
    .setDescription('The heroes API description')
    .setVersion('1.0')
    .addTag('heroes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

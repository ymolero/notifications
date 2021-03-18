import { Create } from '../../../application/create';
import { ReceiveUserDto } from '../../../../user/infrastructure/dtos/receiveUser.dto';
import { createUserDto } from '../../../../user/application/dto/user.dto';
import { Body, Controller, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('user')
export class PostCreateUserController {
    constructor(@Inject('CreateUser') private readonly createService: Create) {}

    @Post()
    async exec(@Body() params: ReceiveUserDto, @Res() res: Response): Promise<any> {
        const dto = new createUserDto(params.name, params.username, params.email);

        try {
            const resp = await this.createService.exec(dto);
            res.status(HttpStatus.CREATED).send(resp);
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                error,
            });
        }
    }
}

import { SuccessInterceptor } from './../common/interceptor/success.interceptor';
import { PositiveIntPipe } from './../common/positiveInt.pipe';
import { CatsService } from './cats.service';
import {
    Controller,
    Get,
    HttpException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
    UseFilters,
    UseInterceptors,
} from '@nestjs/common';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
//@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getAllCat() {
        throw new HttpException({ success: false, message: 'Aa' }, 401);
        return 'all cat';
    }
    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) Param) {
        return 'one cat';
    }
    @Post()
    createCat() {
        return 'create cat';
    }
    @Put(':id')
    updateCat() {
        return 'return cat';
    }

    @Patch(':id')
    updatePartialCat() {
        return;
    }
}

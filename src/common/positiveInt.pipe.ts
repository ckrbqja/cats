import { HttpException } from '@nestjs/common';
import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
    transform(value: number) {
        console.log(value);
        if (value === 3) {
            throw new HttpException('error', 400);
        }
        return value;
    }
}

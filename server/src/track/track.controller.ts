import { ObjectId } from 'mongoose'
import { CreateTrackDto } from './dto/create-track.dto'
import { TrackService } from './track.service'
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CreateCommentDto } from './dto/create-comment.dto'

@Controller('/tracks')
export class TrackController {
   constructor(private TrackService: TrackService) {}

   @Post()
   create(@Body() dto: CreateTrackDto) {
      return this.TrackService.create(dto)
   }

   @Get()
   getAll() {
      return this.TrackService.getAll()
   }

   @Get(':id')
   getOne(@Param('id') id: ObjectId) {
      return this.TrackService.getOne(id)
   }

   @Delete(':id')
   delete(@Param('id') id: ObjectId) {
      return this.TrackService.delete(id)
   }

   @Post('/comment')
   addComment(@Body() dto: CreateCommentDto) {
      return this.TrackService.addComment(dto)
   }
}

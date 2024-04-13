import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { TrackModule } from './track/track.module'

@Module({
   imports: [
      MongooseModule.forRoot(
         'mongodb+srv://darkvoin5:x1DnScnYLrEhCbxP@cluster0.awhshos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      ),
      TrackModule,
   ],
})
export class AppModule {}

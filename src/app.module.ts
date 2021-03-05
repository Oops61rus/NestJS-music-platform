import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.0gf0y.mongodb.net/MUSIC_PLATFORM?retryWrites=true&w=majority"),
        TrackModule
    ]
})

export class AppModule {
}
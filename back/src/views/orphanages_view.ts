import Orphanage from '../models/Orphanages';
import Images_view from '../views/images_view';

export default {
   render(orphanage: Orphanage){
       return{
        id: orphanage.id,
        name: orphanage.name,
        latitude: orphanage.latitude,
        longitude: orphanage.longitude,
        about: orphanage.about,
        instructions: orphanage.instructions,
        openning_hours: orphanage.openning_hours,
        open_on_weekends: orphanage.open_on_weekends,
        images: Images_view.renderMany(orphanage.images)
       }
   },

   renderMany(orphanages: Orphanage[]){
       return orphanages.map(orphanage => this.render(orphanage));
   }
}
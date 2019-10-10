export class Common {

    public static isDev = true;
      public static baseUrl = 'http://localhost:3000/api/';
      public static socketBaseUrl = 'http://localhost:3000';
      public static imageUrl = 'http://localhost:3000/img/';
      public static timeZone = 'Asia/Kolkata';

      static Dlog(object: any) {
        if (Common.isDev) {
              console.log(object);
        }
  }
  
}

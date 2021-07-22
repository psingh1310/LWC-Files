public with sharing class exploeApexContinuation {
    public exploeApexContinuation() {

    }
    
    @AuraEnabled (Continuation=true cacheable=true)
    public static Object startRequest(){
        try {

            // 1. Instantiate Continuous Class
            Continuation con = new Continuation(40);
            //Call back name
            con.ContinuationMethod = 'processResponse';
            con.state = 'HEY!!! Salesforce Casts';

          //Callout to the web services
          HttpRequest req = new HttpRequest();
           req.setMethod('Get');
           req.setEndpoint('https://login.salesforce.com/');

           con.addHttpRequest(req);
           
           return con;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


   //if cacheable = ture, then the data set we get we can't perform any DML operation
    @AuraEnabled (cacheable=true)
    public static string processResponse(List<String> labels, Object state){
        try {
          HttpResponse response =  Continuation.getResponse(labels[0]);
          String result = response.getBody();
          return result;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}

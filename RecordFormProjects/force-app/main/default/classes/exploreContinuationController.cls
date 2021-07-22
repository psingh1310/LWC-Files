public with sharing class exploreContinuationController {
    public exploreContinuationController() {
       
    }
    
    //If continuation=true we are making a http callout
    @AuraEnabled (Continuation=true cacheable=true)
    public static Object startRequest(){
        try {
            Continuation con = new Continuation(40);
            con.ContinuationMethod = 'processResponse';
            con.state = 'Hey !!! Prashant';
            
            HttpRequest req = new HttpRequest();
            req.setMethod('Get');
            req.setEndpoint('https://www.googleapis.com/youtube/v3/search?part=snippet&q=salesforce&key=XXXXXXXXXXXXXXXXXXX');
         
            con.addHttpRequest(req);
            return con;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static Object processResponse(List<String> labels, Object state){
        HttpResponse res = Continuation.getResponse(labels[0]);
        String result = res.getBody();
        return result;
    }
}

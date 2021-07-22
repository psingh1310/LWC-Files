public with sharing class accountControllerClass {
 @AuraEnabled(cacheable=true)
 public static List<Account> getAccountList(){
     try {
         return [SELECT Id, Name FROM Account];
     } catch (Exception e) {
         throw new AuraHandledException(e.getMessage());
     }
 }
}

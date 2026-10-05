class TimeMap {
    HashMap<String,String> hmap;
    public TimeMap() {
        hmap = new HashMap<>();
    }
    
    public void set(String key, String value, int timestamp) {
        hmap.put(key + "-" + timestamp,value);
    }
    
    public String get(String key, int timestamp) {
        String value = "";
        while(timestamp >= 1){
            value = hmap.getOrDefault(key + "-" + timestamp,"");
            if(value != ""){
                break;
            }
            timestamp--;
        }
        return value;
    }
}

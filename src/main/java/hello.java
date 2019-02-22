import javax.swing.*;
import java.util.*;

public class hello {
    public static String solution(String[] participant, String[] completion){
        String answer ="";
        Map<String, Integer> map = new HashMap<String, Integer>();

        for(String p: participant) map.put(p, map.getOrDefault(p, 0) + 1);
//        map.computeIfPresent(pName, (String key, Integer value) -> ++value);
//        map.computeIfAbsent(pName, k -> 1);

        for(String c: completion) map.put(c, map.get(c) - 1);

        for(String key: map.keySet()){
            if(map.get(key) >0){
                answer = key;
            }
        }

        return answer;
    }

    public static boolean solution(String[] phone_book){
        boolean answer = true;

        for(int i=0; i< phone_book.length; i++){
            for(int k = i + 1; k< phone_book.length; k++){
                if(phone_book[i].startsWith(phone_book[k]) || phone_book[k].startsWith(phone_book[i])){
                    answer = false;
                }
            }
        }

        return answer;
    }

    public static int solution(String[][] clothes){
        int answer =0;
        Map<String, Integer> map = new HashMap<>();

        for(int i = 0; i < clothes.length ; i++){
            map.put(clothes[i][1], map.getOrDefault(clothes[i][1], 1)+1);
        }

        int result = 1;

        for(String key: map.keySet()){
            result *= map.get(key);
        }

        answer = result -1;
        return answer;
    }

    public static List sortByValue(Map<String, ArrayList<Integer>> map){
        List<String> list = new ArrayList<>();
        list.addAll(map.keySet());

        Collections.sort(list, new Comparator(){
            public int compare(Object o1, Object o2) {
                Object v1 = map.get(o1).get(0);
                Object v2 = map.get(o2).get(0);
                return ((Comparable)v1).compareTo(v2);
            }
        });
        Collections.reverse(list);
        return list;
    }

    public static List sortByValueInt(Map<String, Integer> map){
        List<String> list = new ArrayList<>();
        list.addAll(map.keySet());

        Collections.sort(list, new Comparator(){
            public int compare(Object o1, Object o2) {
                Object v1 = map.get(o1);
                Object v2 = map.get(o2);
                return ((Comparable)v1).compareTo(v2);
            }
        });
        Collections.reverse(list);
        return list;
    }

    public static List sortByValueMap(Map<Integer, Integer> map){
        List<Integer> list = new ArrayList<>();
        list.addAll(map.keySet());

        Collections.sort(list, new Comparator(){
            @Override
            public int compare(Object o1, Object o2) {
                if(map.get(o1) > map.get(o2)){
                    return 1;
                }
                else if (map.get(o1) == map.get(o2)){
                    if((int)o1 < (int)o2)
                        return 1;
                }
                return -1;
            }
        });
        Collections.reverse(list);
        return list;
    }

    public static int[] solution(String[] genres, int[] plays) {
        int[] answer = {};
        int[][] playlist = new int[2][2];
        int answerCount = 0;

        Map<String , int[][]> m = new HashMap<>();
        Map<String,ArrayList<Integer>> map = new HashMap<>();
        Map<String, Integer> playsMap = new HashMap<>();
        Map<String, Object> genresMap = new HashMap<>();

        for (int i = 0; i < genres.length; i++) {
//            map.computeIfAbsent(genres[i], k -> new ArrayList<Integer>()).add(plays[i]);
//            m.computeIfAbsent(genres[i], k -> new int[2][2]);

            //genresMap.computeIfAbsent(genres[i], k -> new HashMap<>());

            if(genresMap.get(genres[i]) == null){
                Map<Integer, Integer> values = new HashMap<>();
                values.put(i, plays[i]);
                genresMap.put(genres[i], values);
                playsMap.put(genres[i], plays[i]);
            }
            else {
                Map<Integer, Integer> values = (HashMap)genresMap.get(genres[i]);
                values.put(i, plays[i]);
                genresMap.put(genres[i], values);

                if(playsMap.get(genres[i]) < plays[i]){
                    playsMap.put(genres[i], plays[i]);
                }
            }
        }
        System.out.println("playsMap");
        Iterator it = playsMap.keySet().iterator();
        while (it.hasNext()){
            String key = it.next().toString();
            System.out.println(key+ ", " + playsMap.get(key));
        }
        ArrayList<String> sortList = (ArrayList<String>) sortByValueInt(playsMap);
        System.out.println(sortList);
        System.out.println();


        for(String key: genresMap.keySet()){
            Map<Integer, Integer> values = (HashMap)genresMap.get(key);

            if(values.size() == 1){
                answerCount += 1;
            }
            else if(values.size() >= 2){
                answerCount += 2;

                ArrayList<Integer> list = (ArrayList) sortByValueMap(values);
                System.out.println(list);

                Map<Integer, Integer> newValues = new HashMap<>();
                for(int k =0 ; k <=1; k++){
                    int newKey = list.get(k);
                    newValues.put(newKey, values.get(newKey));
                }

                genresMap.put(key, newValues);
            }
        }
        answer = new int[answerCount];

        Iterator iterator = genresMap.keySet().iterator();
        while (iterator.hasNext()){
            String k = iterator.next().toString();
            System.out.println(k + ", " + genresMap.get(k));
        }

        int counter = 0;
        for(String genre: sortList){
            Map<Integer, Integer> maps = (HashMap)genresMap.get(genre);
            for(int num : maps.keySet()){
                answer[counter] = num;
                counter++;
            }
        }

        /**
        ArrayList<Integer> lists = map.get(genres[i]);
        if(lists.size() > 2){
            for(int k=0; k< lists.size(); k++){
                if(lists.get(k) == lists.get(k+1)){
                    int v1 = playsMap.get(l)
                }
            }
        }
    }

    for (String key : map.keySet()) {
        ArrayList<Integer> lists = map.get(key);
        lists.sort(Collections.reverseOrder());
        map.put(key, lists);
    }

    int genreCounter = 0;
    Iterator iterator1 = sortByValue(map).iterator();
    while (iterator1.hasNext()){
        System.out.println(iterator1.next().toString());
        genreCounter++;
    }

    answer = new int[genreCounter*2];

    ArrayList<String> list = (ArrayList)sortByValue(map);
    int answerCounter = 0;

    for(String key : list){
        int count = 0;
        ArrayList<Integer> valueList = map.get(key);
        for (int value : valueList) {
            if(count <2) {
                answer[answerCounter] = playsMap.get(value);
                answerCounter++;
                count++;
            }
            else break;
        }
    }
    **/
        return answer;
    }




    public static void main(String[] args) {
        String[][] clothes = {{"yellow_hat", "headgear"}, {"blue_sunglasses", "eyewear"}, {"green_turban", "headgear"}};
        String[] genres = {"classic", "pop", "classic", "classic", "pop"};
        int[] plays = {500, 600, 150, 800, 2500};

        String[] genres2 = {"classic", "pop", "classic", "classic"};
        int[] plays2 = {500, 600, 150, 500};

        String[] genres3 = {"classic", "pop", "classic", "classic", "classic"};
        int[] plays3 = {500, 600, 150, 500, 500};

        int[] result = solution(genres, plays);
        System.out.println();
        for(int i : result){
            System.out.print(i + "   ");
        }


    }
}


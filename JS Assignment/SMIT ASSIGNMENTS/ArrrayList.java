import java.util.ArrayList;
import java.util.Collections;

public class ArrrayList {
    public static void main(String[] args) {


        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
       // cars.clear();
       // System.out.println(cars);
        for (int i = 0; i < cars.size(); i++) {
            System.out.println(cars.get(i));
        }
        Collections.sort(cars);
        for (String i : cars ){
            System.out.println(i);
        }

    }
}
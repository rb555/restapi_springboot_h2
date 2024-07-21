import java.util.HashMap;
class Solution {
    public static boolean isFrequencyUnique(int n, int[] arr) {
        // code here
        HashMap<Integer, Integer> frequencyMap = new HashMap<>();

        // Count the frequency of each element
        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Create a HashMap to store frequency counts
        HashMap<Integer, Integer> frequencyCount = new HashMap<>();

        // Count the frequency counts
        for (int frequency : frequencyMap.values()) {
            frequencyCount.put(frequency, frequencyCount.getOrDefault(frequency, 0) + 1);
        }

        // Check if all frequency counts are unique
        for (int count : frequencyCount.values()) {
            if (count > 1) {
                return false;
            }
        }

        return true;
    }
}
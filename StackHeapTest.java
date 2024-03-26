

public class StackHeapTest {
    public int n = 5; // primitive data type on heap

    public static void changeInt(int nValue, int nRefN, StackHeapTest nRef) {
        // before +=10
        System.out.println("\n--Before +=10: ");
        System.out.println("nValue: " + nValue);
        System.out.println("nRefN: " + nRefN);
        System.out.println("Stack Heap Test: " + nRef.n);
        
        // += assignments
        nValue += 10;
        nRefN += 10;
        nRef.n += 10;

        // after +=10
        System.out.println("\n--After +=10: ");
        System.out.println("nValue: " + nValue);
        System.out.println("nRefN: " + nRefN);
        System.out.println("Stack Heap Test: " + nRef.n);
    }

    //test
    public static void main(String[] args){
        int n = 5; // primitive data type on stack
        StackHeapTest nRef = new StackHeapTest();
        
        // initial values
        System.out.println("\nn: " + n + ", HashCode: " + System.identityHashCode(n));
        System.out.println("nRef: " + nRef + ", HashCode: " + System.identityHashCode(nRef));
        System.out.println("nRef.n: " + nRef.n + ", HashCode: " + System.identityHashCode(nRef.n));

        changeInt(n, nRef.n, nRef); // (n) stack by value, (nREf.n) heap by value, (nREf) heap by reference
        
        // after
        System.out.println("\nn: " + n + ", HashCode: " + System.identityHashCode(n));
        System.out.println("nRef: " + nRef + ", HashCode: " + System.identityHashCode(nRef));
        System.out.println("nRef.n: " + nRef.n + ", HashCode: " + System.identityHashCode(nRef.n)+"\n");
    }
}
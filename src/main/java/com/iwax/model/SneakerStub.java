package com.iwax.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SneakerStub {
	
	private static Map<Long, Sneaker> sneakers = new HashMap<Long, Sneaker>();
	private static Long idIndex = 3L;

	//populate initial sneakers
	static {
		Sneaker a = new Sneaker(1L, "U869", "A very deep German UBoat", 44.12, 138.44, 1994, "");
		sneakers.put(1L, a);
		
		Sneaker b = new Sneaker(2L, "Thistlegorm", "British merchant boat in the Red Sea", 44.12, 138.44, 1994, "");
		sneakers.put(2L, b);
		
		Sneaker c = new Sneaker(3L, "S.S. Yongala", "A luxury passenger ship wrecked on the great barrier reef", 44.12, 138.44, 1994, "");
		sneakers.put(3L, c);
	}

	public static List<Sneaker> list() {
		return new ArrayList<Sneaker>(sneakers.values());
	}

	public static Sneaker create(Sneaker sneaker) {
		idIndex += idIndex;
		sneaker.setId(idIndex);
		sneakers.put(idIndex, sneaker);
		return sneaker;
	}

	public static Sneaker get(Long id) {
		return sneakers.get(id);
	}

	public static Sneaker update(Long id, Sneaker wreck) {
		sneakers.put(id, wreck);
		return wreck;
	}

	public static Sneaker delete(Long id) {
		return sneakers.remove(id);
	}

}

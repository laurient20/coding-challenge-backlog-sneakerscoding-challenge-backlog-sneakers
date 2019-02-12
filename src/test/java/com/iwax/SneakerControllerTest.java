package com.iwax;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;

import com.iwax.controller.SneakerController;
import com.iwax.model.Sneaker;
import com.iwax.repository.SneakerRepository;

public class SneakerControllerTest {
	
	@InjectMocks
	SneakerController sc;
	
	@Mock
	SneakerRepository sneakerRepository;
	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void testSneakerGet() {
		
		Sneaker swr = new Sneaker();
		swr.setId(1l);
		when(sneakerRepository.findOne(1l)).thenReturn(swr);
		
		
		Sneaker sneaker = sc.get(1L);
		verify(sneakerRepository).findOne(1l);
		
		assertEquals(1L, sneaker.getId().longValue());
	}

}

package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.DirectorService;
import com.kaankaplan.movieService.dao.DirectorDao;
import com.kaankaplan.movieService.entity.Director;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DirectorServiceImpl implements DirectorService {

    private final DirectorDao directorDao;

    @Override
    public List<Director> getall() {
        return directorDao.findAll(Sort.by(Sort.Direction.ASC, "directorName"));
    }

    @Override
    public Director getDirectorById(int directorId) {
        return directorDao.getDirectorByDirectorId(directorId);
    }

    @Override
    public Director add(Director director) {
        return directorDao.save(director);
    }
}

class MoviesController < ApplicationController

  def index
    render json: Movie.all, status: :ok
  end

  def eighties
    eighties = Movie.all.select do |movie|
      movie.decade === "1980"
    end
    render json: eighties, status: :ok
  end

  def nineties
    nineties = Movie.all.select do |movie|
      movie.decade === "1990"
    end
    render json: nineties, status: :ok
  end

  def twothousands
    twothousands = Movie.all.select do |movie|
      movie.decade === "2000"
    end
    render json: twothousands, status: :ok
  end

  def twentytens
    twentytens = Movie.all.select do |movie|
      movie.decade === "2010"
    end
    render json: twentytens, status: :ok
  end

  def twentytwenties
    twentytwenties = Movie.all.select do |movie|
      movie.decade === "2020"
    end
    render json: twentytwenties, status: :ok
  end

end

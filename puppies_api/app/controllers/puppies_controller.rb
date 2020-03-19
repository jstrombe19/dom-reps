class PuppiesController < ApplicationController

  def index
    @puppies = Puppy.all 

    render json: @puppies
  end

  def show
    @puppy = Puppy.find(params[:id])

    render json: @puppy 
  end

  def create
    @puppy = Puppy.create({
      name: params[:name], 
      breed: params[:breed], 
      age: params[:age]
    })

    render json: @puppy
  end

  def update
    @puppy = Puppy.find(params[:id])
    @puppy.update({
      name: params[:name], 
      breed: params[:breed], 
      age: params[:age]
    })

    render json: @puppy
  end

  def destroy
    @puppy = Puppy.find(params[:id])
    @puppy.destroy 
  end

end

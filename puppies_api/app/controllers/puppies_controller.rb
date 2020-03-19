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
      age: params[:age],
      owner_id: params[:owner_id]
    })
    # render json: @puppy 
    redirect_to "http://localhost:3001"
  end

  def update
    @puppy = Puppy.find(params[:id])
    @puppy.update({
      name: params[:name], 
      breed: params[:breed], 
      age: params[:age],
      owner_id: params[:owner_id]
    })

    render json: @puppy
  end

  def destroy
    @puppy = Puppy.find(params[:id])
    @puppy.destroy 
  end

end
